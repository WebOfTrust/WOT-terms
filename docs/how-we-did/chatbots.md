---
Status: draft
---
# Chatbots

## Chatbase and other chatbots

Chatbase only uses the sources uploaded to it. However, it is built on chatGPT's gpt model and it has been known to sometimes break out of character and act as ChatGPT.

Therefore, the chatbot needs to be explicitly instructed in the base prompt to only respond with answers from the data it was trained on, and nothing else.

Source: support@chatbase.co

---

The overall problem with these chatbots is the way how the bot is trained. Take a look on official documentation of OpenAPI (since chatbase claims to use GPT3.5 and 4): https://platform.openai.com/docs/guides/fine-tuning

This is limited to specific models: davinci, curie, babbage, and ada. You can't actually train/ fine tune  GPT3.5 and 4 as you need it, you need to pick models which can be fine tuned. More info here: https://openai.com/blog/how-should-ai-systems-behave
Basically those models are already pre-trained and the process is not easy (cheap).

You could use Bloom or other models which allows you to fine tune it but the UI around it you would need to build on your own (so basically what chatbase provides).

Keep in mind that with simple queries you can run out of funds relatively quickly as GPT3.5 and 4 is quite expensive and since you can't pre-train it it feeds the document each time when someone ask query.

For this site it would be worth to take a look what PaLM2 offers since it can be fine tuned and you can use smaller models for that.

Bart says:

“There are a few ways to train or fine-tune the PaLM2 model with the content of your documents for a specific case.

Google Cloud Platform: You can use the Google Cloud Platform to train or fine-tune the PaLM2 model on your own data. This requires some technical expertise, but it gives you the most control over the training process.
Colaboratory: You can use Google Colaboratory to train or fine-tune the PaLM2 model on your own data. This is a more user-friendly option than the Google Cloud Platform, but you have less control over the training process.
Hugging Face: You can use the Hugging Face Transformers library to train or fine-tune the PaLM2 model on your own data. This is a more flexible option than the Google Cloud Platform or Colaboratory, but it requires some knowledge of the Transformers library.
Here are some specific examples of how you can train or fine-tune the PaLM2 model with the content of your documents:

You can train the PaLM2 model on a dataset of documents that are similar to the documents you want to use the model on. This will help the model to learn the patterns and vocabulary that are specific to your documents.
You can fine-tune the PaLM2 model on a dataset of documents that contain the specific terms or phrases that you want the model to be able to recognize. This will help the model to learn to identify these terms or phrases in new documents.
I hope this helps!”

Keep in mind that Bart and PaLM2 are not available in EU zone/ Canada.

Source: Robert Mitwicki


