import express from 'express';

import { container } from 'tsyringe';

import DealsSearchService from '@modules/services/DealsSearchService';

const dealRouter = express.Router();

dealRouter.get('/', async (req, res) => {
  const searchDeals = container.resolve(DealsSearchService);
  const deals = await searchDeals.execute();
  return res.json(deals);
});

dealRouter.get('/:id', async (req, res) => {
  // const { id } = req.params;

  // const getMessage = container.resolve(GetMessageService);

  // const message = await getMessage.execute(id);

  return res.json('message');
});

// @TODO: Parse template inside CreateMessageService
dealRouter.post('/', async (req, res) => {
  // const { subject, body, template, sender, tags } = req.body;
  // let finalBody = body;

  // const createMessage = container.resolve(CreateMessageService);
  // const parseTemplate = container.resolve(ParseTemplateService);

  // const senderDoc = await Sender.findById(sender);

  // if (!senderDoc) {
  //   throw new Error('Sender not found');
  // }

  // if (template) {
  //   const templateDoc = await Template.findById(template);

  //   if (templateDoc) {
  //     finalBody = parseTemplate.execute({
  //       template: templateDoc,
  //       messageContent: body,
  //     });
  //   }
  // }

  // const recipients = await Contact.findByTags(tags);
  // const recipientsCount = recipients.length;

  // const messageData = {
  //   subject,
  //   body,
  //   finalBody,
  //   recipientsCount,
  //   template,
  //   sender: {
  //     name: senderDoc.name,
  //     email: senderDoc.email,
  //   },
  //   tags,
  // };

  // const message = await createMessage.execute({ data: messageData });

  return res.json('message');
});

dealRouter.post('/:id/send', async (req, res) => {
  // const { id } = req.params;

  // const sendMessage = container.resolve(SendMessageService);
  // const message = await sendMessage.execute(id);

  return res.json('message');
});

dealRouter.delete('/:id', async (req, res) => {
  // const { id } = req.params;

  // const deleteMessage = container.resolve(DeleteMessageService);

  // await deleteMessage.execute(id);

  return res.send();
});

export default dealRouter;
