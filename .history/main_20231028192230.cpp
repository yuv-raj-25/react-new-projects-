#

class Solution {
public:
    
    bool check(vector<int> &onHand, vector<int> &supplier, int demand, int order) {
        int m = onHand.size();
        int n = supplier.size();
        int onHandIndex = 0;
        int supplierIndex = n - order;
        for (int i = 0; i < m + order; i ++) {
            if (supplierIndex < n && (supplier[supplierIndex] <= onHand[onHandIndex]|| onHandIndex >= m)) {
                if (supplier[supplierIndex] < i / demand) {
                    return false;
                }
                supplierIndex ++;
            } else {
                if (onHand[onHandIndex] < i / demand) {
                    return false;
                }
                onHandIndex ++;
            }
        }
        return true;
    }

    int stockLounge(vector<int> &onHand, vector<int> &supplier, int demand) {
        int m = onHand.size();
        int n = supplier.size();
        sort( onHand.begin(), onHand.end() );
        sort( supplier.begin(), supplier.end() );
        for (int i = 0; i < m; i ++) {
            if (onHand[i] < i / demand) {
                return -1;
            }
        }
        int left = 0, right = n, mid;
        while (left + 1 < right) {
            mid = left + (right - left) / 2;
            if ( check(onHand, supplier, demand, mid) ) left = mid;
            else right = mid - 1;
        }
        if ( check(onHand, supplier, demand, right) ) return right;
        else return left;
    }
};