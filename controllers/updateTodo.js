
// import the model
const Todo = require("../models/Todo");

// define routeHandler

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updateAt: Date.now() },

        )

        res.status(200).json({
            success: true,
            data: todo,
            message: "updated successfully"
        })
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({
                success: false,
                data: "Internal server error",
                message: error.message
            })
    }
}
