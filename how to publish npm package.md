# 发布自己npm包


> 去[npmjs](https://www.npmjs.com/)上面注册自己的账户


> 本地初始化一个package包

```
npm init -y
```

> 创建文件夹

```
mkdir common-method
```

> 在文件夹新建需要发布的方法，并导出

```js
export function Random() {
    this.num = '1234567890';
    this.lower = 'qwertyuiopasdfghjklzxcvbnm';
    this.upper = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    this.symbol = `~!@#$%^&*()_+{}:<>?,./l;[]-=！@#￥%……&*（）—+`

    Random.prototype.o2nine = function() {
        return parseInt(Math.random() * 10)
    }

    Random.prototype.nBitNum = function(n) {
        var num = '';
        for(var i = 0; i < n; i++) {
            num += this.o2nine()
        }
        return n > 0 ? num : 0
    }

}
```

> npm install -g 检查代码有没有错误

```bash
PS C:\myData\project\label-kabuka> npm install -g
+ label-kabuka@1.0.0
added 1 package in 0.081s
```

> npm link 将npm模块link到对应的运行项目中去，方便对模块进行测试，并生成`package-lock.json`

```bash
PS C:\myData\project\label-kabuka> npm link
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN label-kabuka@1.0.0 No repository field.
```

> npm login 发布之前先登录，输入账号，密码，邮箱

```bash
PS C:\myData\project\label-kabuka> npm login
Username: label-kabuka
Password:
Email: (this IS public) qinqihan163@163.com
Logged in as label-kabuka on https://registry.npm.taobao.org/.
```


> npm pblish 发布npm包

<font size=70 color=red>发布之前一定一定要先验证邮箱</font>
* 没有验证邮箱是这样的

```bash
PS C:\myData\project\label-kabuka> npm publish
npm notice
npm notice package: label-kabuka-comment@1.0.3
npm notice === Tarball Contents ===
npm notice 524B  common-method/index.js
npm notice 4B    index.js
npm notice 259B  package.json
npm notice 1.6kB README.md
npm notice === Tarball Details ===
npm notice name:          label-kabuka-comment
npm notice version:       1.0.3
npm notice package size:  1.3 kB
npm notice unpacked size: 2.4 kB
npm notice shasum:        efd54a98eae2ec4fb53645babefc45a8254f1621
npm notice integrity:     sha512-xRF2OWLR6tIkM[...]zsgwrVN+aaIyw==
npm notice total files:   4
npm notice
npm ERR! code E403
npm ERR! 403 403 Forbidden - PUT http://registry.npmjs.org/label-kabuka-comment - Forbidden
npm ERR! 403 a package version that is forbidden by your security policy.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\qinqi\AppData\Roaming\npm-cache\_logs\2021-01-30T03_16_13_462Z-debug.log
```

<font size=70 color=red>发布之前一定一定要先把taobao镜像，其他的非npmjs镜像改回来</font>

* 修改为 npmjs 镜像的地址的

```bash
npm config set registry=http://registry.npmjs.org
```

```bash
PS C:\myData\project\label-kabuka> npm publish
npm notice 
npm notice package: label-kabuka@1.0.4
npm notice === Tarball Contents ===
npm notice 524B  common-method/index.js
npm notice 4B    index.js
npm notice 251B  package.json
npm notice 1.6kB README.md
npm notice === Tarball Details ===
npm notice name:          label-kabuka
npm notice version:       1.0.4
npm notice package size:  1.3 kB
npm notice unpacked size: 2.4 kB
npm notice shasum:        f1746d541710e0102280a14b453470050bfcede7
npm notice integrity:     sha512-vJn1VPtYT1KNx[...]oHRWk0TNxXVEg==
npm notice total files:   4
npm notice
+ label-kabuka@1.0.4
```


# npm包添加新的功能或者方法，将其更新到npm上

* 更新版本 npm version patch
* 是在git仓库里面的话，要先commit变化，再push到git的远程仓库，才能publish发布更新

```bash
PS C:\myData\project\label-kabuka> npm version patch
v1.0.6 # 更新了版本
PS C:\myData\project\label-kabuka> npm publish
npm notice 
npm notice package: label-kabuka-common@1.0.6
npm notice === Tarball Contents ===
npm notice 524B  common-method/index.js
npm notice 4B    index.js
npm notice 374B  package.json
npm notice 3.6kB README.md
npm notice === Tarball Details ===
npm notice name:          label-kabuka-common
npm notice version:       1.0.6
npm notice package size:  2.0 kB
npm notice unpacked size: 4.5 kB
npm notice shasum:        682be8ee3e158559999175cc3727248b2af773c0
npm notice integrity:     sha512-+w3hAWOn3vs3+[...]sWCpDfwAEzciQ==
npm notice total files:   4
npm notice
+ label-kabuka-common@1.0.6 # 新版本已经发布到npm上
```


## 删除某个版本的npm包

```bash
PS C:\myData\project\label-kabuka> npm unpublish label-kabuka-common@1.0.6
- label-kabuka-common@1.0.6
```

## 删除npm包

```bash
PS C:\myData\project\label-kabuka> npm unpublish label-kabuka
npm ERR! Refusing to delete entire project. # 删除失败，
npm ERR! Run with --force to do this.
npm ERR!
npm ERR! npm unpublish [<@scope>/]<pkg>@<version> # 尝试按版本号删除
npm ERR! npm unpublish [<@scope>/]<pkg> --force
PS C:\myData\project\label-kabuka> npm unpublish label-kabuka --force # 需要添加 --force 参数
npm WARN using --force I sure hope you know what you are doing.
- label-kabuka
```


















