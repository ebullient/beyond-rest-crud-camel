---
<%* const { Create } = window.customJS;
const title = await tp.system.prompt("Enter Name"); 
const lower = Create.lowerKebab(title); 
const current = tp.file.folder(true);
const folder = await Create.chooseFolder(tp, current);
console.log("pre-move: %o, %o, %o", title, lower, folder);
await tp.file.move(`/${folder}/${lower}`);

tR += `aliases: ['${title}']`;
%>
---
# <% title %>