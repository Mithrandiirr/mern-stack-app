const asyncHandler = require('express-async-handler') 
const User  = require('../models/userModel')
const Goal  = require('../models/goalModel')
// @desc    GET goals
// @route   GET /api/goals
// @access  Private
const getGoals =asyncHandler(async  (req,res) =>{
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
 })

 // @desc    SET goals
// @route   SET /api/goals
// @access  Private
const setGoal = asyncHandler(async  (req,res) =>{
    if(!req.body.text)
    {
       res.status(400)
       throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
 })

 // @desc    UPLOAD goals
// @route   UPLOAD /api/goals
// @access  Private
const updateGoal =asyncHandler( async  (req,res) =>{
    const goal = await Goal.findById(req.params.id)
    const user = await User.findById(req.user.id)
    if(!user)
    {
        res.status(401)
        throw new Error('User not found')
    }
    if(goal.user.toString()!== user.id)
    {
        res.status(401)
        throw new Error('User not authorized')
    }
    if(!goal)
    {
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
    res.status(200).json(updatedGoal)
 })

 // @desc    UPLOAD goals
// @route   UPLOAD /api/goals
// @access  Private
const deleteGoal= asyncHandler(async  (req,res) =>{
    const goal = await Goal.findById(req.params.id)
    const user = await User.findById(req.user.id)
    if(!user)
    {
        res.status(401)
        throw new Error('User not found')
    }
    if(goal.user.toString()!== user.id)
    {
        res.status(401)
        throw new Error('User not authorized')
    }
    if(!goal)
    {
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
     deleteGoal
 }