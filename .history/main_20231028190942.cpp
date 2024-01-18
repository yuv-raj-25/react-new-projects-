#include <iostream>
#include <algorithm>

using namespace std;

const int MAX_DAYS = 100; // Maximum number of days for creamer expiration

int stockLounge(int onHand[], int supplier[], int demand, int n) {
    int totalCreamer = 0;

    // Calculate the total creamer available on hand
    for (int i = 0; i < n; i++) {
        totalCreamer += onHand[i];
    }

    // Calculate the number of days until creamer on hand expires
    int daysToExpire = 0;
    for (int i = 0; i < n; i++) {
        daysToExpire += onHand[i] * i;
    }

    // Sort the supplier array in ascending order of expiry days
    pair<int, int> supplierPairs[MAX_DAYS];
    int supplierCount = 0;
    for (int i = 0; i < n; i++) {
        if (supplier[i] > 0) {
            supplierPairs[supplierCount] = make_pair(i, supplier[i]);
            supplierCount++;
        }
    }
    sort(supplierPairs, supplierPairs + supplierCount);

    int maxCreamerToOrder = 0;

    for (int i = 0; i < supplierCount; i++) {
        int orderDay = supplierPairs[i].first;
        int orderQuantity = supplierPairs[i].second;

        // If ordering more creamer would result in waste, stop ordering
        if (totalCreamer + orderQuantity <= demand * (daysToExpire + orderDay)) {
            maxCreamerToOrder += orderQuantity;
            totalCreamer += orderQuantity;
            daysToExpire += orderDay * orderQuantity;
        } else {
            break;
        }
    }

    // If maxCreamerToOrder is less than the demand, return -1 (waste is guaranteed)
    if (maxCreamerToOrder < demand) {
        return -1;
    }

    return maxCreamerToOrder;
}

int main() {
    int onHand[] = {0, 2, 21};
    int supplier[] = {2, 0, 0};
    int demand = 2;
    int n = sizeof(onHand) / sizeof(onHand[0]);

    int maxCreamerToOrder = stockLounge(onHand, supplier, demand, n);

    if (maxCreamerToOrder == -1) {
        cout << "Waste is guaranteed. Cannot order creamer." << endl;
    } else {
        cout << "Maximum units of creamer to order without waste: " << maxCreamerToOrder << endl;
    }

    return 0;
}
