// const { deleteNoteByIdHandler } = require('./handler');
// const { editNoteByIdHandler } = require('./handler');
// const { getNoteByIdHandler } = require('./handler');
// const { addNoteHandler, getAllNotesHandler } = require('./handler');

// const routes = [
//   {
//     method: 'POST',
//     path: '/notes',
//     handler: addNoteHandler,
//   },
//   {
//     method: 'GET',
//     path: '/notes',
//     handler: getAllNotesHandler,
//   },
//   {
//     method: 'GET',
//     path: '/notes/{id}',
//     handler: getNoteByIdHandler,
//   },
//   {
//     method: 'PUT',
//     path: '/notes/{id}',
//     handler: editNoteByIdHandler,
//   },
//   {
//     method: 'DELETE',
//     path: '/notes/{id}',
//     handler: deleteNoteByIdHandler,
//   },
// ];

// module.exports = routes;

// import { Router } from 'express';
// import { addNote, getAllNotes } from '../controller/note-controller.js';

// const router = Router();

// router.post('/notes', addNote);
// router.get('/notes', getAllNotes);

// export default router;

// import { Router } from 'express';
// import { addNote, getAllNotes, getNoteById, editNoteById, deleteNoteById } from '../controller/note-controller.js';

// const router = Router();

// router.post('/notes', addNote);
// router.get('/notes', getAllNotes);
// router.get('/notes/:id', getNoteById);
// router.put('/notes/:id', editNoteById);
// router.delete('/notes/:id', deleteNoteById);

// export default router;

import express from 'express';
import { addNote, getAllNotes, getNoteById, editNoteById, deleteNoteById } from '../controller/note-controller.js';
import validate from '../../../middlewares/validate.js';
import { notePayloadSchema, noteUpdatePayloadSchema, noteQuerySchema } from '../../../services/notes/validator/schema.js';
// import validateQuery from '../../../middlewares/validateQuery.js';

const router = express.Router();

router.post('/notes', validate(notePayloadSchema), addNote);
router.get('/notes', getAllNotes);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', validate(noteUpdatePayloadSchema), editNoteById);
router.delete('/notes/:id', deleteNoteById);
router.get('/notes', validate(noteQuerySchema), getAllNotes);

export default router;
