import { Method } from 'axios'
import { IRequestData } from '../../interfaces/index.js'

/** Contains the request parameters needed for each path/operation. */
export const ProblemsRequests: IRequestData = {
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
