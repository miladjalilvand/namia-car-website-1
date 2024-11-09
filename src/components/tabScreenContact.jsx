const TabScreen = ({ title, list = [] }) => { // مقدار پیش‌فرض برای list به عنوان یک آرایه خالی

    return (
      <div dir="rtl" className="flex flex-col">
        <h1>{title}</h1>
        {list.length > 0 ? ( // بررسی اینکه list خالی نیست
          list.map((val, ind) => (
            <div key={ind} className="flex flex-col">
              <div className="border-b-2 border-b-red-700 ">
                {val.title}
              </div>
              <div className="flex flex-row  justify-between items-center">
                <div className="flex flex-row">
                  <div>icon</div>
                
                  <div>icon</div>
                </div>
                <div className="flex flex-row">
                  <div>icon</div>
                  <div className="flex flex-col">
                    <div> {val.subtitle}</div>
                    <div> {val.number}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p> // در صورتی که لیست خالی باشد، پیغام نمایش داده می‌شود
        )}
      </div>
    );
  }
  
  export default TabScreen;
  