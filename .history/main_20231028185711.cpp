#include <iostream>
#include <vector>
#include <algorithm>

int stockLounge(std::vector<int> onHand, std::vector<int> supplier, int demand) {
    // Sort onHand and supplier arrays in descending order to use the creamer with the earliest expiry first.
    std::sort(onHand.begin(), onHand.end(), std::greater<int>());
    std::sort(supplier.begin(), supplier.end(), std::greater<int>());

    int maxOrder = 0;  // Maximum units to order without waste.
    int onHandIndex = 0;  // Index for onHand array.
    int supplierIndex = 0;  // Index for supplier array.

    while (onHandIndex < onHand.size() || supplierIndex < supplier.size()) {
        int currentDay = onHandIndex;  // Days for using creamer from onHand.
        int unitsAvailable = 0;  // Units available to use on the current day.

        while (onHandIndex < onHand.size() && onHand[onHandIndex] == currentDay) {
            unitsAvailable++;
            onHandIndex++;
        }

        while (supplierIndex < supplier.size() && supplier[supplierIndex] == currentDay) {
            unitsAvailable++;
            supplierIndex++;
        }

        if (unitsAvailable < demand) {
            // If not enough units are available to meet the daily demand, order more.
            int unitsToOrder = demand - unitsAvailable;
            if (supplierIndex < supplier.size()) {
                // If there are units available from the supplier, order them.
                maxOrder += unitsToOrder;
                supplierIndex++;
            } else {
                // If there are no units available from the supplier, waste is guaranteed.
                return -1;
            }
        }
    }

    return maxOrder;
}

int main() {
    std::vector<int> onHand = {0, 22};
    std::vector<int> supplier = {2};
    int demand = 2;
    int result = stockLounge(onHand, supplier, demand);
    std::cout << "Maximum units to order without waste: " << result << std::endl;
    return 0;
}
