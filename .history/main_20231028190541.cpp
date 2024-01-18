#include <vector>
#include <algorithm>

using namespace std;

int stockLounge(vector<int> onHand, vector<int> supplier, int demand) {
    int totalCreamer = 0;

    // Calculate the total creamer available on hand
    for (int i = 0; i < onHand.size(); i++) {
        totalCreamer += onHand[i];
    }

    // Calculate the number of days until creamer on hand expires
    int daysToExpire = 0;
    for (int i = 0; i < onHand.size(); i++) {
        daysToExpire += onHand[i] * i;
    }

    // Sort the supplier array in ascending order of expiry days
    vector<pair<int, int>> supplierPairs;
    for (int i = 0; i < supplier.size(); i++) {
        if (supplier[i] > 0) {
            supplierPairs.push_back(make_pair(i, supplier[i]));
        }
    }
    sort(supplierPairs.begin(), supplierPairs.end());

    int maxCreamerToOrder = 0;

    for (int i = 0; i < supplierPairs.size(); i++) {
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

    if (maxCreamerToOrder < demand) {
        return -1;
    }

    return maxCreamerToOrder;
}
