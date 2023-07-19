#include <bits/stdc++.h>

class Solution
{
public:
    bool coversAllSkills(const vector<int> &team, const vector<string> &req_skills, const unordered_map<string, vector<int>> &skill_to_persons)
    {
        unordered_set<string> skills_covered;
        for (int person : team)
        {
            for (auto &skill : skill_to_persons.at(req_skills[person]))
            {
                skills_covered.insert(skill);
            }
        }
        return unordered_set<string>(req_skills.begin(), req_skills.end()) == skills_covered;
    }

    vector<int> smallestSufficientTeam(const vector<string> &req_skills, const vector<vector<string>> &people)
    {
        unordered_map<string, vector<int>> skill_to_persons;
        for (int i = 0; i < people.size(); ++i)
        {
            for (const string &skill : people[i])
            {
                skill_to_persons[skill].push_back(i);
            }
        }

        queue<vector<int>> q;
        unordered_set<vector<int>> visited;
        q.push({});
        visited.insert({});

        while (!q.empty())
        {
            vector<int> team = q.front();
            q.pop();
            for (const string &skill : req_skills)
            {
                if (find(team.begin(), team.end(), skill) != team.end())
                {
                    continue;
                }
                for (int person : skill_to_persons[skill])
                {
                    vector<int> new_team = team;
                    new_team.push_back(person);
                    if (!visited.count(new_team))
                    {
                        if (coversAllSkills(new_team, req_skills, skill_to_persons))
                        {
                            return new_team;
                        }
                        q.push(new_team);
                        visited.insert(new_team);
                    }
                }
            }
        }

        return {};
    }
};