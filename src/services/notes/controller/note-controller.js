// const { nanoid } = require('nanoid');
// const notes = require('./notes');

// const addNoteHandler = (request, h) => {
//   const { title = 'untitled', tags, body } = request.payload;

//   const id = nanoid(16);
//   const createdAt = new Date().toISOString();
//   const updatedAt = createdAt;

//   const newNote = {
//     title, tags, body, id, createdAt, updatedAt,
//   };

//   notes.push(newNote);

//   const isSuccess = notes.filter((note) => note.id === id).length > 0;

//   if (isSuccess) {
//     const response = h.response({
//       status: 'success',
//       message: 'Catatan berhasil ditambahkan',
//       data: {
//         noteId: id,
//       },
//     });
//     response.code(201);
//     return response;
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Catatan gagal ditambahkan',
//   });
//   response.code(500);
//   return response;
// };

// const getAllNotesHandler = () => ({
//   status: 'success',
//   data: {
//     notes,
//   },
// });

// const getNoteByIdHandler = (request, h) => {
//   const { id } = request.params;

//   const note = notes.filter((n) => n.id === id)[0];

//   if (note !== undefined) {
//     return {
//       status: 'success',
//       data: {
//         note,
//       },
//     };
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Catatan tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };

// const editNoteByIdHandler = (request, h) => {
//   const { id } = request.params;

//   const { title, tags, body } = request.payload;
//   const updatedAt = new Date().toISOString();

//   const index = notes.findIndex((note) => note.id === id);

//   if (index !== -1) {
//     notes[index] = {
//       ...notes[index],
//       title,
//       tags,
//       body,
//       updatedAt,
//     };

//     const response = h.response({
//       status: 'success',
//       message: 'Catatan berhasil diperbarui',
//     });
//     response.code(200);
//     return response;
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Gagal memperbarui catatan. Id tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };

// const deleteNoteByIdHandler = (request, h) => {
//   const { id } = request.params;

//   const index = notes.findIndex((note) => note.id === id);

//   if (index !== -1) {
//     notes.splice(index, 1);
//     const response = h.response({
//       status: 'success',
//       message: 'Catatan berhasil dihapus',
//     });
//     response.code(200);
//     return response;
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Catatan gagal dihapus. Id tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };

// module.exports = {
//   addNoteHandler,
//   getAllNotesHandler,
//   getNoteByIdHandler,
//   editNoteByIdHandler,
//   deleteNoteByIdHandler,
// };

// import { nanoid } from 'nanoid';
// import notes from '../notes.js';

// export const addNote = (req, res) => {
//   const { title = 'untitled', tags, body } = req.body;

//   const newNote = {
//     id: nanoid(16),
//     title,
//     tags,
//     body,
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),
//   };

//   notes.push(newNote);

//   res.status(201).json({
//     status: 'success',
//     message: 'Catatan berhasil ditambahkan',
//     data: { noteId: newNote.id },
//   });
// };

// export const getAllNotes = (req, res) => {
//   res.json({
//     status: 'success',
//     data: { notes },
//   });
// };

import { nanoid } from 'nanoid';
import notes from '../notes.js';

/**
 * CREATE NOTE
 */
export const addNote = (req, res) => {
  const { title = 'untitled', tags, body } = req.body;

  const newNote = {
    id: nanoid(16),
    title,
    tags,
    body,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  notes.push(newNote);

  return res.status(201).json({
    status: 'success',
    message: 'Catatan berhasil ditambahkan',
    data: {
      noteId: newNote.id,
    },
  });
};

/**
 * READ ALL NOTES
 */
export const getAllNotes = (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: {
      notes,
    },
  });
};

/**
 * READ NOTE BY ID
 */
export const getNoteById = (req, res) => {
  const { id } = req.params;
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({
      status: 'fail',
      message: 'Catatan tidak ditemukan',
    });
  }

  return res.status(200).json({
    status: 'success',
    data: {
      note,
    },
  });
};

/**
 * UPDATE NOTE BY ID
 */
export const editNoteById = (req, res) => {
  const { id } = req.params;
  const { title, tags, body } = req.body;

  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 'fail',
      message: 'Gagal memperbarui catatan. Id tidak ditemukan',
    });
  }

  notes[index] = {
    ...notes[index],
    title,
    tags,
    body,
    updatedAt: new Date().toISOString(),
  };

  return res.status(200).json({
    status: 'success',
    message: 'Catatan berhasil diperbarui',
  });
};

/**
 * DELETE NOTE BY ID
 */
export const deleteNoteById = (req, res) => {
  const { id } = req.params;
  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 'fail',
      message: 'Catatan gagal dihapus. Id tidak ditemukan',
    });
  }

  notes.splice(index, 1);

  return res.status(200).json({
    status: 'success',
    message: 'Catatan berhasil dihapus',
  });
};
