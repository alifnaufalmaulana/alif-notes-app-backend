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

// export default router alif-notes-app-backend;

import { Router } from 'express';
import { addNote, getAllNotes, getNoteById, editNoteById, deleteNoteById } from '../controller/note-controller.js';

const router = Router();

router.post('/notes', addNote);
router.get('/notes', getAllNotes);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', editNoteById);
router.delete('/notes/:id', deleteNoteById);

export default router;
