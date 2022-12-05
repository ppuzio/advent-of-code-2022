use std::env;
use std::fs;

fn main() {
  let contents = fs::read_to_string("./src/bin/input.txt")
    .expect("Should have been able to read the file");

  let findAllOverlaps = contents.split("\n")
    .into_iter()
    .fold(0, |acc, curr| {
    let elves = curr.split(",").collect::<Vec<&str>>();
    let firstElf = elves[0].split("-").collect::<Vec<&str>>();
    let secondElf = elves[1].split("-").collect::<Vec<&str>>();
    let bottomFirst = firstElf[0];
    let topFirst = firstElf[1];
    let bottomSecond = secondElf[0];
    let topSecond = secondElf[1];
    
    if (bottomFirst.parse::<i32>().unwrap() >= bottomSecond.parse::<i32>().unwrap() &&
        topFirst.parse::<i32>().unwrap() <= topSecond.parse::<i32>().unwrap()) ||
      (bottomFirst.parse::<i32>().unwrap() <= bottomSecond.parse::<i32>().unwrap() &&
        topFirst.parse::<i32>().unwrap() >= topSecond.parse::<i32>().unwrap()) ||
      (bottomSecond.parse::<i32>().unwrap() <= topFirst.parse::<i32>().unwrap() &&
        bottomFirst.parse::<i32>().unwrap() <= topSecond.parse::<i32>().unwrap())
     {
      return acc + 1;
    }
    return acc;
  });
  println!("{}", findAllOverlaps);

}
