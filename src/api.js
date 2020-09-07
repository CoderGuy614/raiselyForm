import axios from "axios";

export const apiPost = async (fields) => {
  const isGoodEmail = await confirmEmail(fields.email);
  if (isGoodEmail) {
    console.log("EMAIL IS CONFRIMED");
  }
  const payload = {
    campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
    data: fields,
  };
  return axios({
    method: "post",
    headers: { "Content-Type": "application/json" },
    url: `https://api.raisely.com/v3/signup`,
    data: JSON.stringify(payload),
  })
    .then((response) => {
      console.log("RESPONSE DATA", response.data);
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const confirmEmail = (email) => {
  console.log(email);
};
