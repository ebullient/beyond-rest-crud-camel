class Create {

    lowerKebab = (name) => {
        return name
            .replace(/([a-z])([A-Z])/g, '$1-$2') // separate on camelCase
            .replace(/[\s_]+/g, '-')         // replace all spaces and low dash
            .replace(/[^0-9a-zA-Z_\-]/g, '') // strip other things
            .toLowerCase();                  // convert to lower case
    }

    chooseFolder = async (tp, folder) => {
        if (folder === "/") {
            folder = "";
        }
        const folders = Object.entries(app.vault.adapter.files)
            .filter(x => x[1].type === "folder")
            .filter(x => !x[0].startsWith("assets"))
            .filter(x => x[0].startsWith(folder))
            .map(x => x[0]);
        folders.sort();
        folders.unshift('--');
        const choice = await tp.system.suggester(folders, folders);
        if (choice) {
            if (choice == '--') {
                return await tp.system.prompt("Enter folder path");
            }
            return choice;
        }
        warn("No choice selected. Using root");
        return "";
    }
}
