import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { response } from 'express';

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

  async getBranchByName(name: string) {
    const url = `https://api.github.com/repos/nodejs/node/branches/${name}`;
    await axios.get(url).then((response: any) => console.log(response.data));
  }

  // async getCommits(): Promise<any> {
  //   await axios
  //     .get('https://api.github.com/repos/nodejs/node/commits')
  //     .then((response: any) => {
  //       console.log(
  //         response.data
  //           .sort((a, b) =>
  //             a.commit.committer.date > b.commit.committer.date ? -1 : 1,
  //           )
  //           .slice(0, 25)
  //           .map((commit) => ({
  //             sha: commit.sha,
  //             date: commit.commit.committer.date,
  //           })),
  //       );
  //     });
  // }
}
