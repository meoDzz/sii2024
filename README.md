# sii2024 github basic
…or create a new repository on the command line

echo "# gitCommandNote" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/meoDzz/gitCommandNote.git
git push -u origin main



…or push an existing repository from the command line
git remote add origin https://github.com/meoDzz/gitCommandNote.git
git branch -M main
git push -u origin main


…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

Tạo tên người dùng
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

step1: Check .git có trong thư mục hay chưa ->>>> nếu chưa ->>>> mở VScode terminal và gõ: [git remote -v]
step2: nếu chưa có .git ->>>> khởi tạo .git: [git init]
step3: [git remote add origin "link đường dẫn git repository"] 
        ---->>> ví dụ: "link đường dẫn git repository" =  https://github.com/meoDzz/gitCommandNote.git
step4: đẩy file lên github: [git add .]
step5: git commint -m "note"
step6: khai báo nhánh: git branch -m "tên nhánh"
step7: git push -u origin main

đẩy file đã sửa: 
step1: git add .
step2: git commit -m "update"
step3: git push -u origin





# install npm

#error in npm 
https://www.webdevtutor.net/error-solutions/npm-the-term-npm-is-not-recognized-as-the-name-of-a-cmdlet-function-script-file-or-operable-program

install npm:
npm install -g npm


# pull file mà máy local chưa commit

If your excess commits are only visible to you, you can just do git reset --hard origin/<branch_name> to move back to where the origin is. This will reset the state of the repository to the previous commit, and it will discard all local changes.