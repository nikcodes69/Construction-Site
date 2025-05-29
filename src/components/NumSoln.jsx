import React from 'react'
import { Phone, CheckCircle } from 'lucide-react'

const ServiceOverview = () => {
  return (
        <div className="bg-cream-400 py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Left side - Phone number */}
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4 text-amber-600" />
                <p className="text-gray-700 text-md mb-1">need any construction solution support?</p>
              </div>
              <a href="tel:+9779856044217" className="text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors">
                (+977) 9856044217
              </a>
            </div>
            
            {/* Right side - Description text */}
            <div className="max-w-md">
              <p className="text-lg text-gray-600 mb-3">
                We provide reliable construction solutions—from planning to execution. Contact us for residential, commercial, or industrial projects built to last.
              </p>
              
              {/* Trust indicators */}
              <div className="flex gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>Licensed</span>
                </div>
                <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200" style={{animationDelay: '0.1s'}}>
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>10+ Years</span>
                </div>
                <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200" style={{animationDelay: '0.2s'}}>
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Horizontal line */}
          <div className="container mx-auto mt-6">
            <hr className="border-t border-amber-400" />
          </div>
        </div>
      );
    }

export default ServiceOverview