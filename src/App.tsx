const database = [
  {
    "TasNo": "Tas001234T",
    "comments": [
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      },
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      },
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      }
    ]
  },
  {
    "TasNo": "Tas001235T",
    "comments": [
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      },
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      },
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      }
    ]
  },
  {
    "TasNo": "Tas000034T",
    "comments": [
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      },
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      },
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      }
    ]
  },
  {
    "TasNo": "Tas000004T",
    "comments": [
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      },
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      },
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      }
    ]
  },
  {
    "TasNo": "Tas000045T",
    "comments": [
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      },
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      },
      {
        "DateTime": "10/13/2022 10:15",
        "CustomerName": "Wix",
        "ChangesText": "Request to issue",
        "CommentsText": "Some text of comment"
      }
    ]
  }
]
export const App = () => {
  return (
    <div>
      <h4 className='title'>Trip Log</h4>
      <div className='list__header'>
        <input type="text" />
        <button>Search</button>
      </div>
      <div className='list__container'>
        {database.map(data => (
          <div className='list__item-expandable'>
            <div className='item__header'>
              <h4>{data.TasNo}</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Date&Time</th>
                      <th>Customer</th>
                      <th>Changes</th>
                      <th>Comments</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.comments.map(comment => (
                      <tr>
                        <td>{comment.DateTime}</td>
                        <td>{comment.CustomerName}</td>
                        <td>{comment.ChangesText}</td>
                        <td>{comment.CommentsText}</td>
                        <td>edit</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
