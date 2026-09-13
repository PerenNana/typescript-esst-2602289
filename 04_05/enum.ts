export function Demo() {
  enum MyEnumErrorCode {
    "ERR_1",
    "ERR_199",
    "ERR_9000",
  }

  type MyErrorCode = "ERR_1" | "ERR_199" | "ERR_9000";
  const error: MyErrorCode = "ERR_9000";
  const error2 : MyEnumErrorCode = MyEnumErrorCode.ERR_1;
  const error3 : MyEnumErrorCode = MyEnumErrorCode.ERR_9000;
}

Demo();
