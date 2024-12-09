import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChromePicker } from 'react-color';
import { updateConfig } from '../store/widgetSlice';

const ConfigForm = () => {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.widget);
  const [showColorPicker, setShowColorPicker] = React.useState({
    header: false,
    headerFont: false,
    background: false,
    chatFont: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateConfig({ [name]: value }));
  };

  const handleColorChange = (color, field) => {
    dispatch(updateConfig({ [field]: color.hex }));
  };

  const handleFileUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(updateConfig({ [field]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLoadConfig = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        try {
          const config = JSON.parse(reader.result);
          dispatch(updateConfig(config));
        } catch (error) {
          console.error('Error loading config:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="w-full max-w-md  px-4">
      <div className="mb-4">
        <input
          type="file"
          accept=".json"
          onChange={handleLoadConfig}
          className="hidden"
          id="load-config"
        />
        <label
          htmlFor="load-config"
          className="inline-flex px-3 py-1.5 bg-black text-white rounded-lg cursor-pointer text-xs"
        >
          Load Config
        </label>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-xs mb-1">Config Name</label>
          <input
            type="text"
            name="configName"
            value={config.configName}
            onChange={handleInputChange}
            className="w-full px-2 py-1.5 bg-white border border-gray-200 rounded-lg text-xs"
            placeholder="config-1"
          />
        </div>

        <div>
          <label className="block text-xs mb-1">Bot Name</label>
          <input
            type="text"
            name="botName"
            value={config.botName}
            onChange={handleInputChange}
            className="w-full px-2 py-1.5 bg-white border border-gray-200 rounded-lg text-xs"
            placeholder="Greebo"
          />
        </div>

        <div>
          <label className="block text-xs mb-1">Font Family</label>
          <div className="relative">
            <select
              name="fontFamily"
              value={config.fontFamily}
              onChange={handleInputChange}
              className="w-full px-2 py-1.5 bg-white border border-gray-200 rounded-lg appearance-none text-xs"
            >
              <option value="'Space Grotesk', sans-serif">Space Grotesk, sans-serif</option>
              <option value="'Arial', sans-serif">Arial</option>
              <option value="'Helvetica', sans-serif">Helvetica</option>
              <option value="'Roboto', sans-serif">Roboto</option>
              <option value="'Open Sans', sans-serif">Open Sans</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs mb-1">Header Color</label>
          <div className="relative">
            <input
              type="text"
              value={config.headerColor}
              onClick={() => setShowColorPicker({ ...showColorPicker, header: !showColorPicker.header })}
              className="w-full px-2 py-1.5 bg-white border border-gray-200 rounded-lg text-xs cursor-pointer"
              readOnly
            />
            <div 
              className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{ backgroundColor: config.headerColor }}
            />
            {showColorPicker.header && (
              <div className="absolute z-10 mt-1">
                <div
                  className="fixed inset-0"
                  onClick={() => setShowColorPicker({ ...showColorPicker, header: false })}
                />
                <ChromePicker
                  color={config.headerColor}
                  onChange={(color) => handleColorChange(color, 'headerColor')}
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs mb-1">Header Font Color</label>
          <div className="relative">
            <input
              type="text"
              value={config.headerFontColor}
              onClick={() => setShowColorPicker({ ...showColorPicker, headerFont: !showColorPicker.headerFont })}
              className="w-full px-2 py-1.5 bg-white border border-gray-200 rounded-lg text-xs cursor-pointer"
              readOnly
            />
            <div 
              className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{ backgroundColor: config.headerFontColor }}
            />
            {showColorPicker.headerFont && (
              <div className="absolute z-10 mt-1">
                <div
                  className="fixed inset-0"
                  onClick={() => setShowColorPicker({ ...showColorPicker, headerFont: false })}
                />
                <ChromePicker
                  color={config.headerFontColor}
                  onChange={(color) => handleColorChange(color, 'headerFontColor')}
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs mb-1">Background Color</label>
          <div className="relative">
            <input
              type="text"
              value={config.backgroundColor}
              onClick={() => setShowColorPicker({ ...showColorPicker, background: !showColorPicker.background })}
              className="w-full px-2 py-1.5 bg-white border border-gray-200 rounded-lg text-xs cursor-pointer"
              readOnly
            />
            <div 
              className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{ backgroundColor: config.backgroundColor }}
            />
            {showColorPicker.background && (
              <div className="absolute z-10 mt-1">
                <div
                  className="fixed inset-0"
                  onClick={() => setShowColorPicker({ ...showColorPicker, background: false })}
                />
                <ChromePicker
                  color={config.backgroundColor}
                  onChange={(color) => handleColorChange(color, 'backgroundColor')}
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs mb-1">Chat Font Color</label>
          <div className="relative">
            <input
              type="text"
              value={config.chatFontColor}
              onClick={() => setShowColorPicker({ ...showColorPicker, chatFont: !showColorPicker.chatFont })}
              className="w-full px-2 py-1.5 bg-white border border-gray-200 rounded-lg text-xs cursor-pointer"
              readOnly
            />
            <div 
              className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{ backgroundColor: config.chatFontColor }}
            />
            {showColorPicker.chatFont && (
              <div className="absolute z-10 mt-1">
                <div
                  className="fixed inset-0"
                  onClick={() => setShowColorPicker({ ...showColorPicker, chatFont: false })}
                />
                <ChromePicker
                  color={config.chatFontColor}
                  onChange={(color) => handleColorChange(color, 'chatFontColor')}
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs mb-1">Avatar Image</label>
          <div className="relative">
            <div className="flex items-center px-2 py-1.5 bg-white border border-gray-200 rounded-lg">
              {config.avatarImage && (
                <img src={config.avatarImage} alt="Avatar" className="w-5 h-5 rounded-full mr-2" />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, 'avatarImage')}
                className="hidden"
                id="avatar-upload"
              />
              <label
                htmlFor="avatar-upload"
                className="ml-auto cursor-pointer"
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </label>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs mb-1">Launcher Image</label>
          <div className="relative">
            <div className="flex items-center px-2 py-1.5 bg-white border border-gray-200 rounded-lg">
              {config.launcherImage && (
                <img src={config.launcherImage} alt="Launcher" className="w-5 h-5 rounded-lg mr-2" />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, 'launcherImage')}
                className="hidden"
                id="launcher-upload"
              />
              <label
                htmlFor="launcher-upload"
                className="ml-auto cursor-pointer"
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigForm;