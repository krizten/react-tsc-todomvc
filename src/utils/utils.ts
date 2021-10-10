class Utils {
  public static uuid(): string {
    /*jshint bitwise:false */
    var i, random;
    var uuid = "";

    for (i = 0; i < 32; i++) {
      random = (Math.random() * 16) | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += "-";
      }
      uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
        16
      );
    }

    return uuid;
  }

  public static pluralize(count: number, word: string) {
    return count === 1 ? word : word + "s";
  }

  public static store(namespace: string, data?: any) {
    if (data) {
      return localStorage.setItem(namespace, JSON.stringify(data));
    }

    var store = localStorage.getItem(namespace);
    return (store && JSON.parse(store)) || [];
  }

  public static extend(...objs: any[]): any {
    var newObj = {};
    for (var i = 0; i < objs.length; i++) {
      var obj = objs[i];
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  }

  public static combineTitleAndLabels(
    title: string,
    labels: Array<string>
  ): string {
    var label: string = "";
    if (labels.length) {
      for (let i = 0; i < labels.length; i++) {
        const element = "@" + labels[i];
        label += " " + element;
      }
    }

    return title + label;
  }

  public static parseTitleAndLabels(text: string): {
    labels: Array<string>;
    title: string;
  } {
    var pattern = /\B@[a-z]+/gi;
    var matches = text.toLowerCase().match(pattern);
    var labels: Array<string> = [];
    var title: string = text;

    if (matches && matches.length) {
      for (let i = 0; i < matches.length; i++) {
        title = title.replace(matches[i], "");
      }

      var formattedLabels = matches.map((match) => match.replace(/@/gi, ""));
      labels = this.getUniqueLabels(formattedLabels);
    }
    return { labels: labels, title: title.replace(/@/gi, "").trim() };
  }

  private static getUniqueLabels(labels: Array<string>): Array<string> {
    var distinctMap = {};
    for (var i = 0; i < labels.length; i++) {
      var value = labels[i];
      distinctMap[value] = "";
    }
    return Object.keys(distinctMap);
  }
}

export { Utils };
