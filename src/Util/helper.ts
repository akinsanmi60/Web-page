/* eslint-disable no-unsafe-optional-chaining */
export const getCurrentSession = () => {
  let session;
  const today = new Date();
  if (today.getMonth() < 7) {
    session = `${today.getFullYear() - 1}/${today.getFullYear()}`;
  } else {
    session = `${today.getFullYear()}/${today.getFullYear() + 1}`;
  }
  return session;
};

export const capitalizeFirstLetter = (word: string) =>
  word?.charAt(0).toUpperCase() + word?.slice(1);

export const getFeeTrackerLabel = (key: string) => {
  switch (key) {
    case "Admission Number":
      return "admissionNumber";
    case "Fullname":
      return "fullName";
    case "Amount Paid|₦|":
      return "totalPaid";
    case "Outstanding|₦|":
      return "outstanding";
    case "Level":
      return "currentLevel";
    case "Date Joined":
      return "dateJoined";
    case "Date Employed":
      return "employmentDate";
    case "FullName":
      return "lastName";
    case "Level Name":
      return "name";
    case "Wards":
      return "wards_count";
    case "Subject Name":
      return "name";
    default:
      return "";
  }
};

export const getClassLabel = (key: string) => {
  switch (key) {
    case "AdmissionNo":
      return "admissionNumber";
    case "Admission Number":
      return "admissionNumber";
    case "Fullname":
      return "fullName";
    case "Date Joined":
      return "dateJoined";
    default:
      return "";
  }
};

export const getGuardianTableLabel = (key: string) => {
  switch (key) {
    case "Fullname":
      return "fullName";
    case "Level Name":
      return "name";
    case "Wards":
      return "wards_count";
    default:
      return "";
  }
};
