import axios from "axios";

export default {
  // Gets all drawings
  getDrawings: function() {
    return axios.get("/drawings/api/drawings", {
		headers: {
			'content-type': 'application/json',
			'accept': 'application/json'
		}
    }).then((results) => {
    	return results
    });
  },
  // Gets the book with the given id
  getDrawing: function(id) {
    return axios.get("/drawing" + id);
  },
  updateDrawing: function(id, drawingData) {
    return axios.put(`/drawings/${id}`, drawingData);
  },
  // Deletes the book with the given id
  deleteDrawing: function(id) {
    return axios.delete("/drawings/" + id);
  },
  // updateMyDrawing: function(id, drawing) {
  //   return axios.put(`/drawings/${id}`, drawing);
  // },
  // Saves a book to the database
  saveDrawing: function(drawingData) {
    return axios.post("/drawings/save", drawingData);
  }
};
