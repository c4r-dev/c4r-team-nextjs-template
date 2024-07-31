
export async function joinTeam(userId, teamId) {
    const response = await fetch('/api/join-team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, teamId }),
    });
  
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
  
    return data;
  }
  