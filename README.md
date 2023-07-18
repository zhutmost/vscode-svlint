<h1 align=center> SystemVerilog Linter in VSCode </h1>
<div align="center">

**Lint your SystemVerilog on the fly!**

</div>

<img alt="vscode-svlint screenshot" src="https://github.com/zhutmost/vscode-svlint/raw/main/img/screenshot.jpg" width="100%" height="100%">

## Installation & Setup

### Requirements

- [svlint](https://github.com/dalance/svlint), an open-sourced linter for SystemVerilog, must be installed in your `PATH` environment variable.
- Custom your linting rule file `.svlint.toml`, and put it to the repository root or set a environment variable `SVLINT_CONFIG`.

*Important:* If no configuration is found, the default behavior is to enable all rules, which is certain to show failures because some rules conflict, e.g. `keyword_forbidden_generate` and `keyword_required_generate`.

An example rule file is provided on my GitHub Gist ([link](https://gist.githubusercontent.com/zhutmost/ee489d0a0b9322743bcfbfd5d85662a4/raw/.svlint.toml)). You can save this file as `/path/to/your/repo/.svlint.toml`.

### Configurations

By default, the linter `svlint` is invoked as follows:
```shell
svlint -1 $file
```
where `$file` is the RTL file currently opened in the editor.

You can edit `svlint.linters.svlint.command` in your VSCode setting file `settings.json`:
```toml
"svlint.linters": {
    "svlint": {
        "command": [ "svlint", "-1", "$file" ],
        ...
    }
}
```

For example, if you want to force `svlint` to use `abc.toml` as its configuration file, you can:
```toml
"svlint.linters": {
    "svlint": {
        "command": [ "svlint", "-1", "--config", "/path/to/abc.toml", "$file" ],
        ...
    }
}
```

For more `svlint` usage, please `svlint --help` in your command line, or read [its maunal](https://github.com/dalance/svlint/blob/master/MANUAL.md).
Note that not all the `svlint` options are supported by this extension. Only the options listed below are allowed.

```log
svlint v0.8.0 rev:b9010664 rustc:1.70.0 built:2023-06-26T09:53:23

USAGE:
    svlint [OPTIONS] [--] [FILES]...

OPTIONS:
    -c, --config <CONFIG>
            TOML configuration file [default: .svlint.toml]

    -d, --define <DEFINES>
            Define

    -f, --filelist <FILELIST>
            File list

    -i, --include <INCLUDES>
            Include directory path

        --ignore-include
            Ignore any include

    -p, --plugin <PLUGINS>
            Plugin file
```

## Inspiration & Contribution

If you find any bugs or have any ideas, please feel free to [open an issue](https://github.com/zhutmost/vscode-svlint/issues).

This extension is powered by [@dalance/svlint](https://github.com/dalance/svlint), [@fnando/vscode-linter](https://github.com/fnando/vscode-linter) and many other open-source projects.
Thanks for their excellent jobs.
