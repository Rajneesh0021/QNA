var baseUrl='http://localhost:9090/api/question'
const fetchQuestions = async () => {
  try {
    const response = await fetch(baseUrl);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log('Failed to fetch questions');
    }
  } catch (error) {
    console.log('Error fetching questions:', error);
  }
};

const postQuestion = async (questionData: any) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(questionData),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log('Failed to post question');
    }
  } catch (error) {
    console.log('Error posting question:', error);
  }
};

const deleteQuestion = async (id: number) => {
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      console.log('Failed to delete question');
    }
  } catch (error) {
    console.log('Error deleting question:', error);
  }
};

export { fetchQuestions, postQuestion, deleteQuestion };
