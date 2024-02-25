// HELPER FUNCTIONS HERE


 // SIMPLE SERVER SIDE VALIDATION CHECKING IF THE STRING IS VALID
export const validateString = (value: unknown, maxlength: number) => {
    if (!value || typeof value !== "string" || value.length > maxlength) {
      return false;
    }
  
    return true;
  }
  
    // FUNCTION CHECKING IF THIRD PARTY API "LIKE RESEND FOR EXAMPLE" THROWING AND ERROR
export const getErrorMessages = (error: unknown): string => {
    let message: string ;
  
    if (error instanceof Error) {
      message = error.message;
      
    } else if (error && typeof error === "object" && "message" in error) {
      message = String(error.message);
      
    } else if (typeof error === "string") {
      message = error;
    } else {
      message = "Something get wrong";
    }
   return message;
  };