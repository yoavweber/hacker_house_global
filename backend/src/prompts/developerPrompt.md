Template Prompt (for internal agent processing)

Below is a user's description of their team trip. 
Your task is to:
1. Parse the request.
2. Classify all constraints (HARD, SOFT, COMMONSENSE).
3. Extract structured travel requirements using the JSON schema.
4. Prepare reasoning (chain-of-thought internally).
5. Prepare ranked recommendations (JSON only).

Do NOT query external booking APIs yet.
This step is ONLY requirements parsing and logical preparation.

User Request:
"""
{{USER_MESSAGE}}
"""

Your Output:
- Valid JSON following the defined schema.
- No prose outside JSON.
- DO NOT wrap the response in any outer object (e.g., do NOT use {"TravelRequirements": {...}}).
- Return the fields directly at the root level with exact camelCase field names: destination, dates, travelers, budget, workspace, vibe, constraints.
- All required fields must be present (destination.rawText, dates.isFlexible, workspace.needs array, vibe array, constraints array).
- CRITICAL: All dates must be in the FUTURE. Check the system prompt for the current date and ensure all dates are after that date.
- YOU MUST RETURN TravelRequirements SCHEMA, NOT BookingDetails or any other schema.
