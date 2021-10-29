import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getApi(): Promise<any> {
    await axios
      .get('https://api.github.com/repos/nodejs/node')
      .then((response) => {
        console.log(response.data);
      });
  }

  async getCommits(): Promise<any> {
    await axios
      .get('https://api.github.com/repos/nodejs/node/commits')
      .then((response: any) => {
        console.log(
          response.data.map((commit, i) => ({
            commit_Number: i++,
            sha: commit.sha,
            date: commit.commit.committer.date,
          })),
        );
      });
  }

  async getBranches(): Promise<any> {
    await axios
      .get('https://api.github.com/repos/nodejs/node/branches')
      .then((response: any) => {
        console.log(
          response.data.map((branch, i) => ({
            branch: i++,
            sha: branch.name,
            date: branch.commit.sha,
          })),
        );
      });
  }

  // async getBranchByName(name: string) {
  //   const url = `https://api.github.com/repos/nodejs/node/commits?per_page=25&sha=${name}`;

  //   await axios.get(url).then((response: any) => {
  //     console.log(
  //       response.data
  //         .sort((a, b) =>
  //           a.commit.committer.date > b.commit.committer.date ? -1 : 1,
  //         )
  //         .map((commit) => ({
  //           author: commit.commit.author.name,
  //           message: JSON.stringify(commit.commit.message).split('\\')[0],
  //           sha: commit.sha,
  //           date: commit.commit.committer.date,
  //         })),
  //     );
  //   });
  // }

  // async getBranchWithFilter(name: string, filter: string) {
  //   const url = `https://api.github.com/repos/nodejs/node/commits?per_page=25&sha=${name}`;

  // if (!filter) {
  //   await axios.get(url).then((response: any) => {
  //     console.log(
  //       response.data
  //         .sort((a, b) =>
  //           a.commit.committer.date > b.commit.committer.date ? -1 : 1,
  //         )
  //         .map((commit) => ({
  //           author: commit.commit.author.name,
  //           message: JSON.stringify(commit.commit.message).split('\\')[0],
  //           sha: commit.sha,
  //           date: commit.commit.committer.date,
  //         })),
  //     );
  //   });
  // } else
  //   if (filter === 'message') {
  //     await axios.get(url).then((response: any) => {
  //       console.log(
  //         response.data
  //           .sort((a, b) =>
  //             a.commit.committer.date > b.commit.committer.date ? -1 : 1,
  //           )
  //           .map((commit) => ({
  //             message: JSON.stringify(commit.commit.message).split('\\')[0],
  //           })),
  //       );
  //     });
  //   } else if (filter === 'hash') {
  //     await axios.get(url).then((response: any) => {
  //       console.log(
  //         response.data
  //           .sort((a, b) =>
  //             a.commit.committer.date > b.commit.committer.date ? -1 : 1,
  //           )
  //           .map((commit) => ({
  //             sha: commit.sha,
  //           })),
  //       );
  //     });
  //   } else {
  //     throw new Error('this filter is not available');
  //   }
  // }

  // async getCommits(): Promise<any> {
  // await axios
  //   .get('https://api.github.com/repos/nodejs/node/commits')
  //   .then((response: any) => {
  //     console.log(
  //       response.data
  //         .sort((a, b) =>
  //           a.commit.committer.date > b.commit.committer.date ? -1 : 1,
  //         )
  //         .slice(0, 25)
  //         .map((commit) => ({
  //           sha: commit.sha,
  //           date: commit.commit.committer.date,
  //         })),
  //     );
  //   });
  // }
}
