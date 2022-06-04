import { Method } from 'axios'
import { IAPIResponse, IProblem, IRequestData, OAS } from '../../interfaces/index.js'
import { BaseEndpoint } from '../../lib/index.js'

const Requests: IRequestData = {
  listProblems: () => {
    return {
      method: 'GET' as Method,
      path: '/problems'
    }
  },

  getProblem: (problemId: string) => {
    return {
      method: 'GET' as Method,
      path: `/problems/${problemId}`
    }
  },

  closeProblem: (problemId: string, message: string) => {
    return {
      method: 'POST' as Method,
      path: `/problems/${problemId}/close`,
      payload: { message }
    }
  },

  listComments: (problemId: string) => {
    return {
      method: 'GET' as Method,
      path: `/problems/${problemId}/comments`
    }
  },

  addComment: (problemId: string, message: string, context?: string) => {
    return {
      method: 'POST' as Method,
      path: `/problems/${problemId}/comments`,
      payload: { message, context }
    }
  },

  getComment: (problemId: string, commentId: string) => {
    return {
      method: 'GET' as Method,
      path: `/problems/${problemId}/comments/${commentId}`
    }
  },

  updateComment: (problemId: string, commentId: string, message: string, context?: string) => {
    return {
      method: 'PUT' as Method,
      path: `/problems/${problemId}/comments/${commentId}`,
      payload: { message, context }
    }
  },

  deleteComment: (problemId: string, commentId: string) => {
    return {
      method: 'DELETE' as Method,
      path: `/problems/${problemId}/comments/${commentId}`
    }
  }
}

/** @description The Endpoint class for interacting with the /v2/problems endpoint. */
export class ProblemsEndpoint extends BaseEndpoint {
  /** List problems observed within the specified timeframe. */
  async listProblems(): Promise<IAPIResponse<IProblem[]>> {
    return this.sendRequest(Requests['listProblems']())
  }

  /**
   * Gets the properties of the specified problem.
   *
   * @param problemId The ID of the problem to retrieve.
   */
  async getProblem(problemId: string): Promise<IAPIResponse<IProblem>> {
    return this.sendRequest(Requests['getProblem'](problemId))
  }

  /**
   * Closes the specified problem and adds a closing comment on it.
   *
   * @param problemId The ID of the Problem to close.
   * @param message The message to add as a comment to the Problem, usually the reason why it's being closed.
   */
  async closeProblem(
    problemId: string,
    message: string
  ): Promise<IAPIResponse<OAS['Schemas']['ProblemCloseResult']>> {
    return this.sendRequest(Requests['closeProblem'](problemId, message))
  }

  /**
   * Gets all comments on the specified problem.
   *
   * @param problemId The ID of the Problem to retrieve the comments for.
   */
  async listComments(problemId: string): Promise<IAPIResponse<OAS['Schemas']['CommentsList']>> {
    return this.sendRequest(Requests['listComments'](problemId))
  }

  /** @description Adds a new comment on the specified problem. */
  async addComment(problemId: string, message: string, context?: string) {
    return this.sendRequest(Requests['addComment'](problemId, message, context))
  }

  /** @description Gets the specified comment on a problem. */
  async getComment(problemId: string, commentId: string) {
    return this.sendRequest(Requests['getComment'](problemId, commentId))
  }

  /** @description Updates the specified comment on a problem. */
  async updateComment(problemId: string, commentId: string, message: string, context: string) {
    return this.sendRequest(Requests['updateComment'](problemId, commentId, message, context))
  }

  /** @description Deletes the specified comment on a problem. */
  async deleteComment(problemId: string, commentId: string) {
    return this.sendRequest(Requests['deleteComment'](problemId, commentId))
  }
}
