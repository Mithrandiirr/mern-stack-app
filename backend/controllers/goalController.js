// @desc    GET goals
// @route   GET /api/goals
// @access  Private
const getGoals = ('/', (req,res) =>{
    res.status(200).json({message: 'GET'})
 })

 // @desc    SET goals
// @route   SET /api/goals
// @access  Private
const setGoal = ('/', (req,res) =>{
    res.status(200).json({message: 'POST'})
 })

 // @desc    UPLOAD goals
// @route   UPLOAD /api/goals
// @access  Private
const updateGoal = ('/', (req,res) =>{
    res.status(200).json({message: `UPDATE ${req.params.id}`})
 })

 // @desc    UPLOAD goals
// @route   UPLOAD /api/goals
// @access  Private
const deleteGoal= ('/', (req,res) =>{
    res.status(200).json({message: `DELETE ${req.params.id}`})
 })

 module.exports = {
     getGoals,
     setGoal,
     updateGoal,
     deleteGoal
 }