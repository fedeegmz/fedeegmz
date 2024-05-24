const ageCalculator = (birthDate) => {
    const today = new Date();
    
    let dYears = today.getFullYear() - birthDate.getFullYear();
    const dMonths = today.getMonth() - birthDate.getMonth();

    if (dMonths < 0 || (dMonths === 0 && today.getDate() < birthDate.getDate())) {
        dYears -= 1;
    }
    return dYears;
}

export default ageCalculator;
