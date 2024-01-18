vector<vector<string>> getStatForRequests(int m, const vector<string>& database, const vector<string>& requests) {
    map<string, pair<string, int>> user_data;  // Map to store user data

    // Parse the user data and count the number of users for each website
    for (const string& user : database) {
        string user_id, username, website;
        istringstream user_stream(user);
        user_stream >> user_id >> username >> website;

        if (user_data.find(username) == user_data.end()) {
            user_data[username] = make_pair(website, 0);
        }
        user_data[username].second++;
    }

    // Find websites for the requests
    vector<vector<string>> result;

    for (const string& request : requests) {
        if (user_data.find(request) != user_data.end()) {
            vector<string> website_count = {user_data[request].first, to_string(user_data[request].second)};
            result.push_back(website_count);
        }
    }

    return result;
}