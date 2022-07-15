const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const { status } = require("express/lib/response")

// @desc    Get goal
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler (async(req,res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler (async(req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error ('Tolong masukkan text di field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler (async(req,res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updateGoal)
})

// @desc    Delete goal
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = asyncHandler (async(req,res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}