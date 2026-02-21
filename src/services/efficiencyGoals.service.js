exports.efficiencyOfGoals = async (goals, shots) => {
    if (shots === 0) return 0;
    return ((goals / shots) * 100).toFixed(3);
}
