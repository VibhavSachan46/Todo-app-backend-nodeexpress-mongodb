
// import the model
const Todo = require("../models/Todo");

// define routeHandler

exports.getTodo = async (req, res) => {
    try {
        //fetch all todos items from database

        const todos = await Todo.find({});

        //response
        res.status(200)
            .json({
                success: true,
                data: todos,
                message: "Data fetched successfully"
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

exports.getTodoById = async (req, res) => {
    try {
        //extract basis on id
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id })

        //data for given id not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "no data found"
            })
        }
        // data for given id found

        return res.status(200).json({
            success: true,
            data: todo,
            message: "DAta found"
        })
    }
    catch (err) {

        console.log(error);
        res.status(500)
            .json({
                success: false,
                data: "Internal server error",
                message: error.message
            })

    }
}