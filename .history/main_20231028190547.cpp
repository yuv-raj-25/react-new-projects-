#include <vector>
#include <algorithm>

using namespace std;

int stockLounge(vector<int> onHand, vector<int> supplier, int demand) {
    int totalCreamer = 0;

    for (int i = 0; i < onHand.size(); i++) {
        totalCreamer += onHand[i];
    }

    int daysToExpire = 0;
    for (int i = 0; i < onHand.size(); i++) {
        daysToExpire += onHand[i] * i;
    }

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
