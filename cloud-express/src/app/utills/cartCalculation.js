const cartCalculation = {

    calculateTotalPrice: (items = []) => {
        let total = 0, totalForItem = 0, i;
        if (items) {
            for (i = 0; i < items.length; i++) {
                totalForItem = (items[i].count && items[i].price) ? (items[i].count * items[i].price) : 0;
                total += totalForItem;
            }
        }
        return total;
    },

    calculateTotalDiscount: (totalAmount = 0) => {
        return (500 * 0.02 * (Math.floor(totalAmount / 500)));
    },

    calculateTotalTax: (totalAmount = 0, taxPercentage = 0) => {
        return totalAmount * taxPercentage;
    },

    calculateFinalAmount: (totalAmount = 0, tax = 0, discount = 0) => {
        return (totalAmount + tax - discount);
    }
};

export default cartCalculation;

