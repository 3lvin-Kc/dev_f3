# Backend Development Guide

Welcome to the backend development guide! This document will help you understand the project structure and development workflow.

## Project Structure

Our backend is organized into three main areas, each managed by a dedicated developer, plus a shared utilities directory:

1. **Database & API Routes** (`/api` & `/server`)
   - Handles all database operations
   - Manages API endpoints for frontend communication
   - Location: `/api/`, `/server/`

2. **Jobs System** (`/jobs`)
   - Manages background jobs and scheduled tasks
   - Handles async processing
   - Location: `/jobs/`

3. **AI & RAG** (`/ai` & `/rag`)
   - Implements AI features and Retrieval-Augmented Generation
   - Manages embeddings and vector search
   - Location: `/ai/`, `/rag/`

4. **Shared Utilities** (`/utils`)
   - Contains shared helper functions and utilities
   - Used across all backend components
   - Location: `/utils/`

## Development Guidelines

### About Utils Folder (`/utils`)

This folder is for code that everyone can use. Here's how we should use it:

1. **When to put code here**
   - If you make something useful that others might need
   - For checking if data is correct (validation)
   - For changing data from one format to another
   - For handling errors in a common way

2. **How to name things**
   - Put similar things together in one file (like `dateUtils.ts` for date functions)
   - Use names that explain what the code does
   - If needed, start with what it's for (like `validateEmail` or `formatCurrency`)

3. **Write some docs**
   - Add comments above functions to explain them
   - Show examples of how to use it
   - Say if the function changes anything important

4. **Testing is important!**
   - Every function needs tests
   - Put tests in `__tests__/utils/`
   - Test all the tricky cases because everyone will use this

5. **Example of using utils**
   ```typescript
   // First import what you need
   import { formatDate, validateEmail } from '../../utils/formatUtils';
   
   // Then use it in your code
   const isEmailGood = validateEmail('test@example.com');
   const niceDate = formatDate(new Date());
   ```

### General Rules
- Each developer is responsible for their designated area
- Keep your code modular and well-documented
- Follow TypeScript best practices
- Write unit tests for your code
- Keep dependencies updated in your area

### How to Write Code in Your Area

#### 1. Database & API Team
```typescript
// Example API route
import { Router } from 'express';
import { validateRequest } from '../../middleware';

const router = Router();

router.get('/data', validateRequest, async (req, res) => {
  // Your database logic here
});

export default router;
```

#### 2. Jobs Team
```typescript
// Example job
import { Job } from 'bullmq';

export async function processData(job: Job) {
  try {
    // Your job logic here
    console.log(`Processing job ${job.id}`);
    return { success: true };
  } catch (error) {
    console.error('Job failed:', error);
    throw error;
  }
}
```

#### 3. AI & RAG Team
```typescript
// Example AI service
import { getEmbedding } from '../ai/embeddings';

export async function generateResponse(prompt: string) {
  const embedding = await getEmbedding(prompt);
  // Your RAG logic here
  return {
    response: "Generated response",
    sources: []
  };
}
```

## Testing Your Code

### Unit Testing
Each module should have its own test file:
- `*.test.ts` for test files
- Place tests next to the code they test
- Mock external dependencies

Example test structure:
```typescript
// __tests__/yourModule.test.ts
import { yourFunction } from '../yourModule';

describe('yourFunction', () => {
  it('should work as expected', () => {
    const result = yourFunction(input);
    expect(result).toBe(expectedOutput);
  });
});
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests for specific area
npm test -- --testPathPattern=api/    # For API tests
npm test -- --testPathPattern=jobs/   # For jobs tests
npm test -- --testPathPattern=ai/     # For AI tests
```

## Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Work on your changes in your designated area
3. Write tests for your code
4. Run tests locally
5. Create a pull request
6. Get code review from at least one team member
7. Merge after approval

## Need Help?
- Check the project's main README
- Schedule a call.
