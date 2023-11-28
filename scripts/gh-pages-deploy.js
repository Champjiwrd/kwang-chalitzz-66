const { exec } = require("child_process");
const fs = require("fs").promises;

(async () => {
  try {
    await execCommand("git checkout --orphan gh-pages");
    console.log("Building started...");
    await execCommand("npm run build");
    const folderName = await getFolderName(["dist", "build"]);
    await execCommand(`git --work-tree ${folderName} add --all`);
    await execCommand(`git --work-tree ${folderName} commit -m "gh-pages"`);
    console.log("Pushing to gh-pages...");
    await execCommand("git push origin HEAD:gh-pages --force");
    await execCommand(`rm -r ${folderName}`);
    await execCommand("git checkout -f main");
    await execCommand("git branch -D gh-pages");
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();

async function execCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      console.log(stdout);
      console.error(stderr);
      resolve();
    });
  });
}

async function getFolderName(folders) {
  for (const folder of folders) {
    try {
      await fs.access(folder);
      return folder;
    } catch (err) {
      // Folder doesn't exist, continue to the next one
    }
  }
  throw new Error("Neither 'dist' nor 'build' folder found");
}
