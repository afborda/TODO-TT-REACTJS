import api from "./baseUrl";

export const GetTasks = async () => {
  try {
    const task = await api.get("tasks");
    return task;
  } catch (error) {
    console.log("Erro do Back", error);
  }
};

export const AddTask = async (data) => {
  try {
    await api.post("tasks", data);
  } catch (error) {
    console.log("Erro do Back", error);
  }
};

export const DeleteTask = async (id) => {
  try {
    await api.delete(`tasks/${id}`);
  } catch (error) {
    console.log("Erro do Back", error);
  }
};

export const updateTask = async (id, data) => {
  try {
    console.log(id);
    await api.put(`tasks/${id}`, data);
  } catch (error) {
    console.log("Erro do Back", error);
  }
};
