import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getApi(): Promise<string> {
    return await axios
      .get('https://api.github.com/repos/nodejs/node')
      .then((response: any) => {
        return JSON.stringify(response.data, null, 2);
      });
  }

  async getCommits(): Promise<string> {
    return await axios
      .get('https://api.github.com/repos/nodejs/node/commits')
      .then((response: any) => {
        return response.data.map((commit, i) => ({
          commit_Number: i++,
          sha: commit.sha,
          date: commit.commit.committer.date,
        }));
      });
  }

  async getBranches(): Promise<any> {
    return await axios
      .get('https://api.github.com/repos/nodejs/node/branches')
      .then((response: any) => {
        return response.data.map((branch, i) => ({
          branch: i++,
          sha: branch.name,
          date: branch.commit.sha,
        }));
      });
  }

  async getBranchByName(name: string): Promise<any> {
    const url = `https://api.github.com/repos/nodejs/node/commits?per_page=25&sha=${name}`;

    return await axios.get(url).then((response: any) => {
      return response.data
        .sort((a, b) =>
          a.commit.committer.date > b.commit.committer.date ? -1 : 1,
        )
        .map((commit, i: number) => ({
          numberOfCommit: i++,
          author: commit.commit.author.name,
          message: JSON.stringify(commit.commit.message).split('\\')[0],
          sha: commit.sha,
          date: commit.commit.committer.date,
        }));
    });
  }

  async getBranchWithFilter(name: string, filter: string): Promise<any> {
    const url = `https://api.github.com/repos/nodejs/node/commits?per_page=25&sha=${name}`;

    return await axios.get(url).then((response: any) => {
      if (filter === 'hash') {
        return response.data.map((commit, i: number) => ({
          numberOfSha: i++,
          sha: commit.sha,
        }));
      } else if (filter === 'message') {
        return response.data.map((commit, i: number) => ({
          numberOfMessage: i++,
          message: JSON.stringify(commit.commit.message).split('\\')[0],
        }));
      } else {
        throw new Error('Invalid filter');
      }
    });
  }
}
