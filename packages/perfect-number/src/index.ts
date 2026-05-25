import * as readline from "node:readline";

function isPerfect(n: number): boolean {
  if (n <= 1) return false;

  let sum = 1;
  const limit = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      sum += i;
      const counterpart = n / i;
      if (counterpart !== i) {
        sum += counterpart;
      }
    }
  }

  return sum === n;
}

function main(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let t = 0;
  let caseCount = 0;
  const results: string[] = [];

  rl.on("line", (line: string) => {
    if (t === 0) {
      t = parseInt(line.trim(), 10);
      return;
    }

    const n = parseInt(line.trim(), 10);
    results.push(isPerfect(n) ? "Yes" : "No");
    caseCount++;

    if (caseCount === t) {
      process.stdout.write(results.join("\n") + "\n");
      rl.close();
    }
  });
}

main();
