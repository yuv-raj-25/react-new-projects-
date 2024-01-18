#include <iostream>
#include <algorithm>

const int MAX_UNITS = 10;

int stockLounge(int onHand[], int supplier[], int demand) {
    // Sort onHand and supplier arrays in descending order to use the creamer with the earliest expiry first.
    std::sort(onHand, onHand + MAX_UNITS, std::greater<int>());
    std::sort(supplier, supplier + MAX_UNITS, std::greater<int>());

    int maxOrder = 0;  // Maximum units to order without waste.
    int onHandIndex = 0;  // Index for onHand array.
    int supplierIndex = 0;  // Index for supplier array.

    while (onHandIndex < MAX_UNITS || supplierIndex < MAX_UNITS) {
        int currentDay = onHandIndex;  // Days for using creamer from onHand.
        int unitsAvailable = 0;  // Units available to use on the current day.

        while (onHandIndex < MAX_UNITS && onHand[onHandIndex] == currentDay) {
            unitsAvailable++;
            onHandIndex++;
        }

        while (supplierIndex < MAX_UNITS && supplier[supplierIndex] == currentDay) {
            unitsAvailable++;
            supplierIndex++;
        }

        if (unitsAvailable < demand) {
            // If not enough units are available to meet the daily demand, order more.
            int unitsToOrder = demand - unitsAvailable;
            if (supplierIndex < MAX_UNITS) {
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
    int onHand[] = {0, 22};
    int supplier[] = {2};
    int demand = 2;
    int result = stockLounge(onHand, supplier, demand);
    std::cout << "Maximum units to order without waste: " << result << std::endl;
    return 0;
}
