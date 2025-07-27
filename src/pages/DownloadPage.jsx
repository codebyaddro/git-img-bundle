import { useEffect, useState } from 'react';
import { FiDownload, FiClock, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FaFilePdf, FaFileArchive, FaFileVideo } from 'react-icons/fa';

const DownloadPage = () => {
  const [downloads, setDownloads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching purchased items
  useEffect(() => {
    const fetchDownloads = async () => {
      // In a real app, you would fetch this data from your API
      setTimeout(() => {
        setDownloads([
          {
            id: 'DL-1001',
            name: 'Advanced React E-book',
            type: 'PDF',
            size: '12.5 MB',
            downloadUrl: '#',
            expires: '2024-12-31',
            downloadsRemaining: 5,
            image: 'https://via.placeholder.com/150',
            author: 'React Experts Team'
          },
          {
            id: 'DL-1002',
            name: 'UI Design Templates Pack',
            type: 'ZIP',
            size: '45.2 MB',
            downloadUrl: '#',
            expires: '2024-12-31',
            downloadsRemaining: 3,
            image: 'https://via.placeholder.com/150',
            author: 'Creative Design Co.'
          },
          {
            id: 'DL-1003',
            name: 'JavaScript Video Course',
            type: 'MP4',
            size: '3.2 GB',
            downloadUrl: '#',
            expires: '2024-12-31',
            downloadsRemaining: 10,
            image: 'https://via.placeholder.com/150',
            author: 'JS Academy'
          }
        ]);
        setIsLoading(false);
      }, 1000);
    };

    fetchDownloads();
  }, []);

  const handleDownload = (id) => {
    // In a real app, this would trigger the actual download
    // and decrement the downloads remaining count
    alert(`Starting download for item ${id}`);
    setDownloads(downloads.map(item => 
      item.id === id 
        ? { ...item, downloadsRemaining: item.downloadsRemaining - 1 } 
        : item
    ));
  };

  const getFileIcon = (type) => {
    switch(type) {
      case 'PDF':
        return <FaFilePdf className="text-red-500 text-2xl" />;
      case 'ZIP':
        return <FaFileArchive className="text-yellow-500 text-2xl" />;
      case 'MP4':
        return <FaFileVideo className="text-blue-500 text-2xl" />;
      default:
        return <FiDownload className="text-gray-500 text-2xl" />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Preparing your downloads...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-32 ">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiCheckCircle className="text-green-500 text-3xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Download Your Purchases</h1>
          <p className="mt-2 text-gray-600">
            Thank you for your purchase! Your files are ready to download.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              Your Downloadable Products ({downloads.length})
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              You can download each product multiple times until the expiration date.
            </p>
          </div>

          <div className="divide-y divide-gray-200">
            {downloads.map((item) => (
              <div key={item.id} className="p-6 flex flex-col sm:flex-row">
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">by {item.author}</p>
                    </div>
                    <div className="flex items-center">
                      {getFileIcon(item.type)}
                      <span className="ml-2 text-sm text-gray-500">{item.type}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <FiClock className="text-gray-400 mr-2" />
                      <span>Expires: {item.expires}</span>
                    </div>
                    <div className="flex items-center">
                      <FiDownload className="text-gray-400 mr-2" />
                      <span>Downloads left: {item.downloadsRemaining}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">Size:</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
                    <button
                      onClick={() => handleDownload(item.id)}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center justify-center"
                    >
                      <FiDownload className="mr-2" />
                      Download Now
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                      Save to My Account
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Need Help?</h2>
          </div>
          <div className="p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FiAlertCircle className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Download instructions</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    If you encounter any issues with your downloads, please:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Check your internet connection</li>
                    <li>Ensure you have enough storage space</li>
                    <li>Try using a different browser</li>
                    <li>Contact support if problems persist</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                View Purchase History
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;