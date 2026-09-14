type ERROR_CODES =
  | "ERROR_1"
  | "ERROR_2"
  | "ERROR_4"
  | "ERROR_5";
type ServerResponse = {
  html: string;
  errorCode: Exclude<ERROR_CODES, "ERROR_5">;
};
type SuccessResponse = Omit<ServerResponse, "errorCode">

export function Demo() {
}
