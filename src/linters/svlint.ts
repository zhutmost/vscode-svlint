import {
    LinterGetOffensesFunction,
    LinterOffense,
    LinterOffenseSeverity,
  } from "vscode-linter-api";

  export const getOffenses: LinterGetOffensesFunction = ({ stdout, uri }) => {
    const items = stdout
      .split(/\r?\n/g)
      .map((line) =>
        line
          .trim()
          .match(/^Fail\s+(.+?):(\d+):(\d+)\s(.+)\shint:\s(.+)$/),
      )
      .filter(Boolean) as RegExpMatchArray[];
      const offenses: LinterOffense[] = [];

    items.forEach((matches) => {
      const [_, fail, line, column, code, hint] = matches;
      const lineStart = Math.max(0, Number(line) - 1);
      const columnStart = Math.max(0, Number(column) - 1);
      const lineEnd = lineStart
      const columnEnd = columnStart + code.length

      offenses.push({
        severity: LinterOffenseSeverity.warning,
        message: hint,
        lineStart,
        lineEnd,
        columnStart,
        columnEnd,
        correctable: false,
        code,
        uri,
        source: "svlint",
        docsUrl: `https://dart.dev/tools/linter-rules`,
      })
    })

    return Promise.resolve(offenses);
  }
