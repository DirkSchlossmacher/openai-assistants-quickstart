export let assistantId = "asst_AcS4mAwrbODDLl2qT1yUaVDO"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
